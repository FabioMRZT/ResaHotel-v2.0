import express from 'express';
// import { body } from 'express-validator';
import { ChambreController } from '../controllers/chambreController.js';
const Chambrerouter = express.Router();
// Validation des données de chambre
/*const chambreValidation = [
 body('numero')
 .notEmpty()
 .withMessage('Le numéro de chambre est obligatoire')
 .isLength({ min: 1, max: 10 })
 .withMessage('Le numéro doit faire entre 1 et 10 caractères'),
 body('capacite')
 .isInt({ min: 1, max: 50 })
 .withMessage('La capacité doit être un nombre entre 1 et 50')
];
*/
const chambreValidation = []
Chambrerouter.get('/', ChambreController.index);
Chambrerouter.get('/create', ChambreController.create);
Chambrerouter.post('/', chambreValidation, ChambreController.store);
Chambrerouter.get('/:id/edit', ChambreController.edit);
Chambrerouter.put('/:id', chambreValidation, ChambreController.update);
Chambrerouter.get('/:id/delete', ChambreController.delete);
Chambrerouter.delete('/:id', ChambreController.destroy);
export { Chambrerouter};
