export class Triangle {
    public a: number
    public b: number
    public c: number

    constructor(a: number, b: number, c: number) {
        this.a = a
        this.b = b
        this.c = c
    }

    public isValid(): boolean {	
		let a: number, b: number, c: number
		a = this.a;
		b = this.b;
		c = this.c;
		if(a == 0 || b == 0 || c == 0){
			return false
		}
		return a < b + c && b < a + c && c < a + b;
	}
	
	public isEquilateral(): boolean {	
		let a: number, b: number, c: number
		a = this.a;
		b = this.b;
		c = this.c;
		return a == b && b == c;
	}
	
	public isIsoseles(): boolean {	
		let a: number, b: number, c: number
		a = this.a;
		b = this.b;
		c = this.c;
		return (a == b && a != c) || (c == b && c != a) || (a == c && a != b);
	}
	
	public isScalene(): boolean {	
		let a: number, b: number, c: number;
		a = this.a;
		b = this.b;
		c = this.c;
		return a !== b && a !== c;
	}
	
	public whatIsTheTriangle(): string {
		if(!this.isValid()) {
			return "Esse triangulo não é válido";
		}
		else if(this.isEquilateral()) {
			return "Equilatero";
		}
		else if(this.isIsoseles()) {
			return "Isoseles";
		}
		else if(this.isScalene()) {
			return "Escaleno";
		}
		return "";
	}

	public update(a: number, b: number, c: number){
		this.a = a
		this.b = b
		this.c = c
	}
}