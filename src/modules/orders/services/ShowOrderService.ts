import AppError from "@shared/errors/AppError";
import { orderRepositories } from "../database/repositories/OrderRepositories";
import { Order } from "../database/entities/Order";

export class ShowOrderSerice {
  async execute(id: string): Promise<Order> {
    const order = await orderRepositories.findById(Number(id))
    console.log('MY ORDERRRR: ', order)

    if(!order){
      throw new AppError('Order not found')
    }

    return order;
  }
}
