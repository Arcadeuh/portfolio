import Airtable, { FieldSet } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";

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
    public static GetIntroductions(data: any[]){
        if(data.length>0){ data = []; }
        this.database('Introduction').select({
            view: 'Grid view'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            if(records){
                records.forEach(function(record) {
                    data.push(record.fields);
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
    * GitHub
    * Itch
    * OtherUrl
    */
    public static GetProjectResume(data: any[], category: string){
        if(data.length>0){ data = []; }
        this.database('Projects').select({
            view: 'Grid view'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            if(records){
                records.forEach(function(record) {
                    if(record.fields["Category"].toString() == category){
                        data.push(record.fields);
                    }
                });
            }
        });
    }

}