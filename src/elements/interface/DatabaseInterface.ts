import Airtable, { FieldSet } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";
import { ProjectResume } from "./ProjectResume";
import { IntroductionItem } from "./IntroductionItem";

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
    public static getIntroductions(data: any[]){
        if(data.length>0){ data = []; }
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
    }
    
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
    public static getProjectResume(data: ProjectResume[], category: string){
        if(data.length>0){ data = []; }
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
                                record.fields["idProject"],
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
                console.log(data);
            }
        });
    }

}