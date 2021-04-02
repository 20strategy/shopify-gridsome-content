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
        sh """
        python3 -m awscli s3 cp s3://puppyous-ci/node_modules.tar .
        """
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
