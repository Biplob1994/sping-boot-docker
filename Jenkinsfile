pipeline {
    agent any
    
    stages {
        
        stage ('github Integration') {
            steps {
                checkout([$class: 'GitSCM', 
                branches: [[name: '*/main']],
                doGenerateSubmoduleConfigurations: false,
                extensions: [[$class: 'CleanCheckout']],
                submoduleCfg: [], 
                userRemoteConfigs: [[url: 'https://github.com/Biplob1994/sping-boot-docker.git']]])
              sh "ls -ltr"
            }
        }  
        stage ('container stop and remove') {
            steps {
                sh 'docker stop $(docker ps -a -q)'
                sh 'docker rm $(docker ps -a -q)'
            }
        }    
        stage ('docker build') {
            steps {
                sh 'cd /home/application/workspace/sping-boot-docker/Dockerfiles && docker-compose up -d'
                sh 'docker ps'
            }
        }
}
}
