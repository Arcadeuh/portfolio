export class IntroductionItem{
    /*
    * Get introduction item from "Introduction" table
    * An item (fields of the record gotten) is composed of : 
    * Title
    * Text
    * Image
    */

    constructor(public title, public text, public imageUrl){
    }
}