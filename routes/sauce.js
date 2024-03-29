const express = require("express");
// Créer le routeur
const router = express.Router();

// Import du middleware d'authentification dans le routeur
const auth = require("../middleware/auth");
// Import du middleware multer dans le routeur
const multer = require("../middleware/multer-config");
// Import du modèle dans le routeur
const sauceCtrl = require("../controllers/sauce");

// Import des contrôleurs
router.get("/", auth, sauceCtrl.getAllSauces);
router.post("/", auth, multer, sauceCtrl.createSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce);

// Permettre l'export du routeur sur d'autres fichiers
module.exports = router;