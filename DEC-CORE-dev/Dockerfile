# Utilise une image de base avec JDK
FROM openjdk:17-jdk-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier .war dans l'image
COPY target/dec-core-0.0.1-SNAPSHOT.war /app/app.war

# Expose le port utilisé par l'application
EXPOSE 8087

# Commande pour exécuter l'application
ENTRYPOINT ["java", "-jar", "/app/app.war"]