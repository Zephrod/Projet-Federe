# Utilise une image Node légère
FROM node:alpine

# Crée un dossier de travail dans le container
WORKDIR /client

# Copie les fichiers de dépendances uniquement
COPY package.json ./

# Installe Angular CLI et les dépendances du projet
RUN npm install -g @angular/cli && npm install

# Copie le reste du projet
COPY . .

# Angular utilise ce port par défaut
EXPOSE 4200

# Commande qui démarre le projet Angular en mode dev
CMD ["ng", "serve", "--host", "0.0.0.0"]
