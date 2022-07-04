interface Params {
    array: Array<any>;
    query: any;
}

export default function arrayHas (params: Params, instances: boolean = false): Object | boolean {
    let amount: number = 0,
        returned: boolean = false;
    
    for (let object of params.array ) {
        if (object == params.query) {
            returned = true;
            amount++;
        }
    }
    
    if (instances) {
        return {
            returned: returned,
            instances: amount
        }
    } else {
        return returned;
    }
}
