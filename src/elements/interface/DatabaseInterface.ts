import Airtable, { FieldSet } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";
import { IntroductionItem } from "../objects/IntroductionItem";

export abstract class DatabaseInterface{
    
    private static database: AirtableBase = new Airtable({apiKey: 'keyXzoxi702YUSmCf'}).base('applC0kHPlM0YtRDa');

    public static GetIntroductions(introductionData: IntroductionItem[]){
        if(introductionData.length>0){ introductionData = []; }
        this.database('Introduction').select({
            view: 'Grid view'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            if(records){
                records.forEach(function(record) {
                    introductionData.push(new IntroductionItem(record.fields['Title']?.toString(), record.fields['Text']?.toString()));
                });
            }
        });
    }

}