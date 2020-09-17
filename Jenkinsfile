// 声明式流水线
pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}


// 在Jenkins升级2.x版本之前,流水线只有一种脚本式流水线（Script Pipeline）
// 当升级2.x版本后,新增了声明式流水线（Declarative Pipeline）
// 无论是哪种流水线,都需要为流水线定义流水线脚本,称之为Jenkinsfile,使用Groovy语法写成


