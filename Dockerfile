FROM node:18 as builder

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Package-Dateien kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Projektdateien kopieren
COPY . ./

# Angular-App bauen (Produktion)
RUN npm run build

# ---
# Production-Image
FROM node:18 as runner

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Benötigte Dateien aus dem Builder kopieren
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# Abhängigkeiten für den Server installieren (ohne devDependencies)
RUN npm install --only=production

# Umgebungsvariablen setzen
ENV NODE_ENV=production

# Startbefehl definieren
CMD ["node", "dist/server/main.js"]

# Exponieren des Standardports
EXPOSE 4000
