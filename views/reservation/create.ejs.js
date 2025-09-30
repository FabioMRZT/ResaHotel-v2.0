<!DOCTYPE html><html><head><meta charset="utf-8"><title>Nouvelle réservation</title></head>
<body>
  <% include ../partials/navbar.ejs %>
  <% include ../partials/messages.ejs %>

  <div class="container">
    <h3>Créer une réservation</h3>
    <form method="post" action="/reservations" class="row g-2">
      <div class="col-md-6">
        <label class="form-label">Client</label>
        <select name="client_id" class="form-select" required>
          <option value="">— Sélectionner —</option>
          <% clients.forEach(c => { %>
            <option value="<%= c.client_id %>"><%= c.nom %> <%= c.prenom %> (#<%= c.client_id %>)</option>
          <% }) %>
        </select>
      </div>
      <div class="col-md-6">
        <label class="form-label">Chambre</label>
        <select name="chambre_id" class="form-select" required>
          <option value="">— Sélectionner —</option>
          <% chambres.forEach(ch => { %>
            <option value="<%= ch.chambre_id %>">Ch.<%= ch.numero %> (#<%= ch.chambre_id %>)</option>
          <% }) %>
        </select>
      </div>
      <div class="col-md-4"><label class="form-label">Date d'arrivée</label><input type="date" name="date_arrivee" class="form-control" required></div>
      <div class="col-md-4"><label class="form-label">Date de départ</label><input type="date" name="date_depart" class="form-control" required></div>
      <div class="col-md-4"><label class="form-label">Nombre de personnes</label><input type="number" min="1" name="nombre_personnes" class="form-control" value="1"></div>
      <div class="col-12">
        <button class="btn btn-success">Créer</button>
        <a class="btn btn-secondary" href="/reservations">Annuler</a>
      </div>
    </form>
  </div>
</body></html>
