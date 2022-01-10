export class ProjectResume{
    /*
    * Get resumes of projects from "Projects" table
    * An item (fields of the record gotten) is composed of : 
    * Name
    * idProject
    * Category
    * Description
    * Image
    * Github
    * Itch
    * OtherUrl
    */

    constructor(public name, public idProject, public category, public description, public imageUrl, public github, public itch, public otherurl){
    }
}