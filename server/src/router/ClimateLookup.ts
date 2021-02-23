import {Router} from 'express'
import ClimateLookup from '../controllers/ClimateLookup.controller';

const router = Router()
const controller = new ClimateLookup();


router.post('/city', (req, res) =>  controller.LookupByCity(req, res));


export default router;