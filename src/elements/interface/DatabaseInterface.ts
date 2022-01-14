import Airtable, { FieldSet } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";
import { ProjectResume } from "./ProjectResume";
import { IntroductionItem } from "./IntroductionItem";
import { PostDetail } from "./PostDetail";

/*
* Interface between database and frontend
* Database conserve data inside tables
* No object returned, just "record" from a table of the database.
* After a function return a list of "record.fields", if you want Element from this "record", just do :
* listDataReturned[n]['Element']
* If it exists, cool ! Else, it's undefined
*/
export abstract class DatabaseInterface{
    
    private static database: AirtableBase = new Airtable({apiKey: 'keyXzoxi702YUSmCf'}).base('applC0kHPlM0YtRDa');

    /*
    * Get introduction item from "Introduction" table
    * An item (fields of the record gotten) is composed of : 
    * Title
    * Text
    * Image
    */
    public static async getIntroductions(data: any[]){
        if(data.length>0){ data = []; }
        return new Promise((resolve, reject)=>{
            
            this.database('Introduction').select({
                view: 'Grid view'
            }).firstPage(function(err, records) {
                if (err) { console.error(err); return; }
                if(records){
                    records.forEach(function(record) {
                        data.push(
                            new IntroductionItem(
                                record.fields["Title"],
                                record.fields["Text"],
                                record.fields["Image"][0]['url'],
                            )
                        );
                    });
                }
            });
            setTimeout(resolve, 500);
        });
    }
    
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
    public static async getProjectsResume(data: ProjectResume[], category: string){
        if(data.length>0){ data = []; }
        return new Promise((resolve, reject)=>{
            this.database('Projects').select({
                view: 'Grid view'
            }).firstPage(function(err, records) {
                if (err) { console.error(err); return; }
                if(records){
                    records.forEach(function(record) {
                        if(record.fields["Category"].toString() == category){
                            data.push(
                                new ProjectResume(
                                    record.fields["Name"],
                                    record.fields["ProjectId"],
                                    record.fields["Category"],
                                    record.fields["Description"],
                                    record.fields["Image"][0]['url'],
                                    record.fields["Github"],
                                    record.fields["Itch"],
                                    record.fields["OtherUrl"],
                                )
                            );
                        }
                    });
                }
            });
            setTimeout(resolve, 500);
        })
    }

    /*
    * selfReference doit contenir un paramètre "projectResume"
    */
    public static async getProjectResume(selfReference: any, projectId: number){
        return new Promise((resolve, reject)=>{
            this.database('Projects').select({
                view: 'Grid view'
            }).firstPage(function(err, records) {
                if (err) { console.error(err); return; }
                if(records){
                    records.forEach(function(record) {
                        if(record.fields["ProjectId"] == projectId){
                            selfReference.projectResume = new ProjectResume(
                                record.fields["Name"],
                                record.fields["ProjectId"],
                                record.fields["Category"],
                                record.fields["Description"],
                                record.fields["Image"][0]['url'],
                                record.fields["Github"],
                                record.fields["Itch"],
                                record.fields["OtherUrl"],
                            );
                        }
                    });
                }
            });
            setTimeout(resolve, 500);
        });
    }
    
    
    /*
    * Get details of projects from "ProjectDetails" table
    * An item (fields of the record gotten) is composed of : 
    * Part
    * ProjectId
    * Position
    * Content
    * Image
    */
    public static async getPostDetails(data: PostDetail[], postId?: number){
        if(data.length>0){ data = []; }
        return new Promise((resolve, reject)=>{
            this.database('PostDetails').select({
                view: 'Grid view'
            }).firstPage(function(err, records) {
                if (err) { console.error(err); return; }
                if(records){

                    if(postId){
                        records.forEach(function(record) {
                            //Si 
                            if(record.fields["PostId"] == postId){
                                let projectDetail: PostDetail = new PostDetail(
                                    record.fields["Part"],
                                    record.fields["PostId"],
                                    record.fields["Position"],
                                    record.fields["Content"],
                                    undefined,
                                );
                                if(record.fields["Image"]){ projectDetail.imageUrl = record.fields["Image"][0]['url']; }
                                data.push(projectDetail);
                            }
                        });
                    }
                    else{
                        records.forEach(function(record) {
                            let projectDetail: PostDetail = new PostDetail(
                                record.fields["Part"],
                                record.fields["PostId"],
                                record.fields["Position"],
                                record.fields["Content"],
                                undefined,
                            );
                            if(record.fields["Image"]){ projectDetail.imageUrl = record.fields["Image"][0]['url']; }
                            data.push(projectDetail);
                        });
                    }
                    console.log(data);
                }
            });
            setTimeout(resolve, 500);
        });
    }

}