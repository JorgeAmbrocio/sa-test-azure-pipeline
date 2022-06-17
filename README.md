# SA - Azure Pipeline - Sonarqube Scanner

## Para instalación de sonarqube

[Tutorial SonarQube - Docker installation](https://techexpert.tips/sonarqube/sonarqube-docker-installation/)

[Tutorial - Sonarqube Scanner Installation on Ubuntu Linux](https://techexpert.tips/sonarqube/sonarqube-scanner-installation-ubuntu-linux/)

### **Requerimientos**

- Crear archivo sonar-project.properties
- Pruebas unitarias
  - Node JS: Mocha && Chai
  - Python: Unittest
- Coverage
  - Node JS: nyc
  - Python: Coverage

### **Comandos**

Ejecutar pruebas coverage en python

````txt
coverage run -m unittest discover -v
coverage xml -i --omit=/opt/*
````

Ejecutar pruebas y coverage en NodeJS

````json
"test": "nyc --reporter=lcov --reporter=text-lcov mocha --exit"
````

Ejecutar scanner de Sonarqube

````txt
sonar-scanner -Dsonar.login=<llave que genera el dashboard de Sonarqube>
````
