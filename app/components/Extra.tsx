import Plan, { PlanProps } from "./Plan"

const plans: PlanProps[] = [
    {
        name: "תכנית 1",
        price: 123,
        description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס ",
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "תכנית 2",
        price: 123,
        description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס ",
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "תכנית 3",
        price: 123,
        description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס ",
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "תכנית 4",
        price: 123,
        description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס ",
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "תכנית 5",
        price: 123,
        description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס ",
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "תכנית 6",
        price: 123,
        description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס ",
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "תכנית 7",
        price: 123,
        description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס ",
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "תכנית 8",
        price: 123,
        description: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס ",
        image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
]

export default function Extra() {
    return <div dir="rtl" className="w-full flex flex-col gap-8 pt-0 transition-all sm:items-start items-center sm:pt-6">
        <div dir="rtl" className="text-2xl font-bold">
            תכניות הייעוץ וההדרכה שלי
        </div>
        <div dir="rtl" className="flex lg:flex-row flex-col w-full gap-8 justify-between flex-wrap">
            {plans.map(plan =>{
                return <Plan price={plan.price} description={plan.description} name={plan.name} image={plan.image} key={plan.name} />
            })}
        </div>
    </div>
}