/*
    Las propiedades y metodos estaticos nos permiten acceder sin la necesidad de generar una instancia de nuestra clase.

    Esto es muy util cuando nuestra clase solo necesita realizar operaciones como la clase Math por ejemplo. Suelen utilizarse para utilidades genericas.

    NOTA: Los metodos estaticos solo puede acceder apropiedades estaticas.
*/

class CurrencyConverter {

    static defaultCurrency: string = '$USD';

    static convertCurrency(localCurrency: string, amount: number, currency?: string,) {
        // Convierte el valor de la moneda local a una extranjera.
        if(!currency) {
            currency = this.defaultCurrency
        }

        console.log(`Se convirtio de ${localCurrency} a ${currency} el siguiente monto: ${amount}`);
    }

}

CurrencyConverter.convertCurrency('$ARS', 150000, '')