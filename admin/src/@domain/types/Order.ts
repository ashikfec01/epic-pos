export type Order = {
    customer_id : number ; 
    order_total : number ; 
    additional_charge : number ;
    discount_amount : number ; 
    payment_status : string ;
    status: string ;
    partial_paid_amount: number ;
    order_notes : string ;
    due_amount : number ;
}