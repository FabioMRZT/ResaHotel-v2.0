<!DOCTYPE html><html><head><meta charset="utf-8"><title>Éditer réservation</title></head>
<body>
  <% include ../partials/navbar.ejs %>
  <% include ../partials/messages.ejs %>

  <div class="container">
    <h3>Éditer réservation #<%= r.id %></h3>
    <form method="post" action="/reservations/<%= r.id %>/edit" class="row g-2">
      <div class="col-md-6">
        <label class="form-label">Client</label>
        <select name="client_id" class="form-select" required>
          <% clients.forEach(c => { %>
            <option value="<%= c.client_id %>" <%= c.client_id===r.client_id?'selected':'' %>>
              <%= c.nom %> <%= c.prenom %> (#<%= c.client_id %>)
            </option>
          <% }) %>
        </select>
      </div>
      <div class="col-md-6">
        <label class="form-label">Chambre</label>
        <select name="chambre_id" class="form-select" required>
          <% chambres.forEach(ch => { %>
            <option value="<%= ch.chambre_id %>" <%= ch.chambre_id===r.chambre_id?'selected':'' %>>
              Ch.<%= ch.numero %> (#<%= ch.chambre_id %>)
            </option>
          <% }) %>
        </select>
      </div>
      <div class="col-md-4"><label class="form-label">Date d'arrivée</label><input type="date" name="date_arrivee" class="form-control" value="<%= r.date_arrivee.toISOString ? r.date_arrivee.toISOString().substring(0,10) : r.date_arrivee %>" required></div>
      <div class="col-md-4"><label class="form-label">Date de départ</label><input type="date" name="date_depart" class="form-control" value="<%= r.date_depart.toISOString ? r.date_depart.toISOString().substring(0,10) : r.date_depart %>" required></div>
      <div class="col-md-4"><label class="form-label">Nombre de personnes</label><input type="number" min="1" name="nombre_personnes" class="form-control" value="<%= r.nombre_personnes %>"></div>
      <div class="col-12">
        <button class="btn btn-primary">Enregistrer</button>
        <a class="btn btn-secondary" href="/reservations">Annuler</a>
      </div>
    </form>
  </div>
</body></html>
