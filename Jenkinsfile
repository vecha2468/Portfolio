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
        sh './deploy_staging'
    }
}
stage('Deploy - Production') {
    steps {
        sh './deploy_production'
    }
}
    }
}
