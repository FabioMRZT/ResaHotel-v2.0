< !DOCTYPE html > <html><head><meta charset="utf-8"><title>Réservations</title></head>
    <body>
        <% include ../partials/navbar.ejs %>
        <% include ../partials/messages.ejs %>

        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <h3>Liste des réservations</h3>
                <a class="btn btn-success" href="/reservations/create">Nouvelle réservation</a>
            </div>
            <table class="table table-striped mt-3">
                <thead><tr>
                    <th>ID</th><th>Client</th><th>Chambre</th>
                    <th>Arrivée</th><th>Départ</th><th># Pers.</th><th></th>
                </tr></thead>
                <tbody>
                    <% reservations.forEach(r => { %>
        <tr>
          <td><%= r.id %></td>
          <td><%= (r.client_nom||'Inconnu') + ' ' + (r.client_prenom||'') %></td>
          <td><%= r.chambre_numero||'?' %></td>
          <td><%= r.date_arrivee %></td>
          <td><%= r.date_depart %></td>
          <td><%= r.nombre_personnes %></td>
          <td class="text-nowrap">
            <a class="btn btn-sm btn-primary" href="/reservations/<%= r.id %>/edit">Éditer</a>
            <form action="/reservations/<%= r.id %>/delete" method="post" style="display:inline" onsubmit="return confirm('Supprimer ?')">
              <button class="btn btn-sm btn-danger">Supprimer</button>
            </form>
          </td>
        </tr>
      <% }) %>
                </tbody>
            </table>
        </div>
    </body></html>