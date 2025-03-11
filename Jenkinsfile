pipeline {
    agent any  // Runs on any available agent (Jenkins master if allowed)

    environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE    = 'sqlite'
    }

    stages {
        stage('Build') {
            steps {
                echo "Database engine is ${DB_ENGINE}"
                echo "DISABLE_AUTH is ${DISABLE_AUTH}"
                sh 'printenv'  // Prints all environment variables
            }
        }
    }
}
