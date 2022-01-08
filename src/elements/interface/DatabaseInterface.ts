import Airtable, { FieldSet } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";
export abstract class DatabaseInterface{
    
    private static database: AirtableBase = new Airtable({apiKey: 'keyXzoxi702YUSmCf'}).base('applC0kHPlM0YtRDa');

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
    
    public static GetProjectResume(data: any[]){
        if(data.length>0){ data = []; }
        this.database('Projects').select({
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

}