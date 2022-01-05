export class IntroductionItem{
    private title: string;
    private text: string;
    private imageUrl: string;

    constructor(title: string, text: string, imgUrl: string){
        this.title = title;
        this.text = text;
        this.imageUrl = imgUrl;
    }

    //====GETTERS====
    public getTitle(){
        return this.title;
    }
    public getText(){
        return this.text;
    }
    public getImageUrl(){
        return this.imageUrl;
    }
}