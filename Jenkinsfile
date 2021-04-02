pipeline {
  // Each stage specify its own agent
  agent none

  // Setup common job properties
  options {
    ansiColor('xterm')
    timestamps()
    timeout(time: 240, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '10'))
    preserveStashes()
  }

  // Build stages
  stages {
    stage('Gridsome Builder: Build') {
      agent { label 'gridsome_builder' }
      steps {
        withCredentials([
          string(credentialsId: 'GRIDSOME_SHOPIFY_STOREFRONT_TOKEN', variable: 'GRIDSOME_SHOPIFY_STOREFRONT_TOKEN'),
          string(credentialsId: 'CONTENTFUL_TOKEN', variable: 'CONTENTFUL_TOKEN'),
          string(credentialsId: 'CONTENTFUL_SPACE', variable: 'CONTENTFUL_SPACE')
        ]) {
          checkoutSrcs()
          sh '''
          #!/bin/bash
          python3 -m awscli s3 cp --quiet s3://puppyous-ci/node_modules.tar .
          tar xf node_modules.tar
          export PATH=$HOME/npm-global/bin:$PATH
          export GRIDSOME_SHOPIFY_STOREFRONT=puppyous
          export CONTENTFUL_ENVIRONMENT=master
          gridsome build
          '''
        }
      }
    }
  }
}

// check out source code from git
def checkoutSrcs() {
  retry(5) {
    try {
      timeout(time: 2, unit: 'MINUTES') {
        checkout scm
        sh 'git submodule update --init'
      }
    } catch (exc) {
      deleteDir()
      error "Failed to fetch source codes"
    }
  }
}
