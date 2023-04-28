class Mood {
    id: string;
    score: number;

    
    constructor(props:number){
        this.id = new Date().toISOString();
        this.score = props;

    }
}
export default Mood;