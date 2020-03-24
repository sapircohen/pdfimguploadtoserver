import React from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';


export default class FileUpload extends React.Component{
    AddPDF = (error, file)=>{
        console.log(file)
        if(this.fileValidate(file)){
            //אם הקובץ שעלה עומד בתנאים עכשיו ניתן להעלות אותו לסרבר
            //save to DB
        }
    }
    fileValidate = (file)=>{
        console.log(file.fileExtension)
        let isValid = false;
        //file.fileExtension זה בעצם הסיומת של הקובץ אם אתם רוצים להגביל את המשתמש לסוג קובץ מסוים תוסיפו תנאי
        // if (file.fileExtension !=='pdf') {
            
        // }
        // else{
        //     isValid=true;
        // }
        if(isValid){
            console.log(file.fileExtension);
            console.log(file.fileSize);
        }
        return isValid;
    }
    // saveToFirebaseStorage = (file)=>{
    //     const groupData = JSON.parse(localStorage.getItem('groupData'));
    //     const uploadPic = storage.ref('images/'+groupData.GroupName+'/ProjectDocument/'+file.name).put(file);
    //     uploadPic.on('state_changed',
    //     (snapshot)=>{
    //     },(error)=>{
    //         console.log(error);
    //     },
    //     ()=>{
    //         storage.ref('images/'+groupData.GroupName+'/ProjectDocument/'+file.name).getDownloadURL()
    //         .then((url)=>{
    //             this.props.savePDF(url);
    //         })
    //     })
    // }
    render(){
        return(
            <div style={divStyle}>
                <FilePond allowMultiple={false} onaddfile={this.AddPDF} labelIdlE='PDF UPLOAD'/>
                <p>sdfjhdsfkhddsf</p>
                <p>dfkjsdfkjh</p>
            </div>
        )
    }
}

const divStyle = {
    padding:'150px'
} 