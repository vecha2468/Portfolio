pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building'
            }
        }
        stage('Deploy - Staging') {
    steps {
        sh 'chmod +x deploy_staging.sh'
        sh './deploy_staging'
    }
    }
  stage('Deploy - Production') {
    steps {
        sh 'chmod +x deploy_production.sh'
        sh './deploy_production'
    }
}
    }
}
