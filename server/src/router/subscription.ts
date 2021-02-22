import {Router} from 'express'
import SubscriptionController from '../controllers/Subscription.controller';

const router = Router()
const controller = new SubscriptionController();


router.post('/', (req, res) =>  controller.subscribeToNotification(req, res));


export default router;