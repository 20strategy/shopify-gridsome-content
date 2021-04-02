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
        checkoutSrcs()
        withCredentials([
          string(credentialsId: 'GRIDSOME_SHOPIFY_STOREFRONT_TOKEN', variable: 'GRIDSOME_SHOPIFY_STOREFRONT_TOKEN'),
          string(credentialsId: 'CONTENTFUL_TOKEN', variable: 'CONTENTFUL_TOKEN'),
          string(credentialsId: 'CONTENTFUL_SPACE', variable: 'CONTENTFUL_SPACE'),
          string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'NETLIFY_AUTH_TOKEN'),
          string(credentialsId: 'NETLIFY_SITE_ID', variable: 'NETLIFY_SITE_ID')
        ]) {
          sh '''
          #!/bin/bash
          ln -s $HOME/node_modules/ .
          export PATH=$HOME/npm-global/bin:$PATH
          export GRIDSOME_SHOPIFY_STOREFRONT=puppyous
          export CONTENTFUL_ENVIRONMENT=master
          gridsome build
          netlify deploy
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
