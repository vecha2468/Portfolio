pipeline {
    agent any  // Runs on any available Jenkins agent
    stages {
        stage('Test') {
            steps {
                sh 'node --eval "console.log(process.arch, process.platform)"'
            }
        }
    }
}
