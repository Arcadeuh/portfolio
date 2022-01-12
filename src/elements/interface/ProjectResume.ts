export class ProjectResume{
    /*
    * Get resumes of projects from "Projects" table
    * An item (fields of the record gotten) is composed of : 
    * Name
    * ProjectId
    * Category
    * Description
    * Image
    * Github
    * Itch
    * OtherUrl
    */

    constructor(public name, public projectId, public category, public description, public imageUrl, public github, public itch, public otherurl){
    }
}