import {useState} from 'react';
import './XPhone.css';

function XPhone(props : any){
   const iphoneUrl = "./assets/iphone.png";
   return(
       <div className="xphone__content">
         <div className="title">
             <h1 className='title__xphone--large'>xPhone</h1>
             <h2 className='title__xphone--small'>Lots to Love.Less to spend.
                    Starting at $399
             </h2>
        </div>
    
        <div className="tablet__sample">
            <svg  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10462" width="200" height="200"><path d="M231.984022 0h560.943956c103.263992 0 186.975985 83.359993 186.975985 186.175985v651.64795c0 102.815992-83.711993 186.175985-186.975985 186.175985H231.984022C128.72003 1023.99992 45.008036 940.639927 45.008036 837.823935V186.175985C45.008036 83.359993 128.72003 0 231.984022 0z" fill="#7C7F95" p-id="10463"></path><path d="M956.535965 884.367931a23.327998 23.327998 0 0 1-23.375998-23.279998V162.911987a23.327998 23.327998 0 0 1 23.375998-23.271998 23.319998 23.319998 0 0 1 23.367998 23.279998v698.183946a23.319998 23.319998 0 0 1-23.367998 23.271998z" fill="#4C4F6E" p-id="10464"></path><path d="M231.984022 46.543996h514.19996c77.439994 0 140.239989 62.519995 140.239989 139.631989v651.64795c0 77.119994-62.799995 139.631989-140.239989 139.631989H231.984022c-77.447994 0-140.239989-62.519995-140.239989-139.631989V186.175985c0-77.119994 62.791995-139.631989 140.239989-139.631989z" fill="#2C2F53" p-id="10465"></path><path d="M746.183982 930.903927H231.984022c-51.631996 0-93.487993-41.679997-93.487993-93.079992V279.271978c0-51.415996 41.855997-93.095993 93.487993-93.095993h514.19996c51.631996 0 93.487993 41.679997 93.487992 93.095993v558.551957c0 51.407996-41.855997 93.079993-93.487992 93.079992z" fill="#FA4659" p-id="10466"></path><path d="M699.439985 418.903967H278.720018c-51.631996 0-93.487993-41.671997-93.487992-93.079992 0-51.415996 41.855997-93.095993 93.487992-93.095993H699.439985c51.639996 0 93.495993 41.679997 93.495993 93.095993 0 51.407996-41.855997 93.079993-93.495993 93.079992z" fill="#FB7C8A" p-id="10467"></path><path d="M231.984022 232.719982h46.743996c25.815998 0 46.751996 20.839998 46.751997 46.559996v46.543997c0 25.695998-20.935998 46.543996-46.751997 46.543996h-46.743996c-25.815998 0-46.743996-20.847998-46.743996-46.543996v-46.551997c0-25.711998 20.927998-46.543996 46.743996-46.543996zM699.439985 232.719982h46.743997c25.815998 0 46.743996 20.839998 46.743996 46.559996v46.543997c0 25.695998-20.927998 46.543996-46.743996 46.543996h-46.751997c-25.807998 0-46.743996-20.847998-46.743996-46.543996v-46.551997c0-25.711998 20.935998-46.543996 46.743996-46.543996zM465.712004 232.719982h46.743996c25.815998 0 46.743996 20.839998 46.743996 46.559996v46.543997c0 25.695998-20.919998 46.543996-46.743996 46.543996h-46.743996c-25.815998 0-46.751996-20.847998-46.751997-46.543996v-46.551997c0-25.711998 20.935998-46.543996 46.751997-46.543996z" fill="#91EDF8" p-id="10468"></path><path d="M231.984022 465.455964h46.743996c25.815998 0 46.751996 20.839998 46.751997 46.543996v46.543996c0 25.703998-20.935998 46.551996-46.751997 46.551997h-46.743996c-25.815998 0-46.743996-20.847998-46.743996-46.551997V511.99996c0-25.703998 20.927998-46.543996 46.743996-46.543996z" fill="#FDB8BF" p-id="10469"></path><path d="M699.439985 465.455964h46.743997c25.815998 0 46.743996 20.839998 46.743996 46.543996v46.543996c0 25.703998-20.927998 46.551996-46.743996 46.551997h-46.751997c-25.807998 0-46.743996-20.847998-46.743996-46.551997V511.99996c0-25.703998 20.935998-46.543996 46.743996-46.543996z" fill="#4C4F6E" p-id="10470"></path><path d="M465.712004 465.455964h46.743996c25.815998 0 46.743996 20.839998 46.743996 46.543996v46.543996c0 25.703998-20.919998 46.551996-46.743996 46.551997h-46.743996c-25.815998 0-46.751996-20.847998-46.751997-46.551997V511.99996c0-25.703998 20.935998-46.543996 46.751997-46.543996z" fill="#18AEAC" p-id="10471"></path><path d="M231.984022 698.175945h46.743996c25.815998 0 46.751996 20.847998 46.751997 46.551997v46.543996c0 25.703998-20.935998 46.551996-46.751997 46.551997h-46.743996c-25.815998 0-46.743996-20.847998-46.743996-46.551997v-46.543996c0-25.703998 20.927998-46.551996 46.743996-46.551997z" fill="#8FE9DB" p-id="10472"></path><path d="M699.439985 698.175945h46.743997c25.815998 0 46.743996 20.847998 46.743996 46.551997v46.543996c0 25.703998-20.927998 46.551996-46.743996 46.551997h-46.751997c-25.807998 0-46.743996-20.847998-46.743996-46.551997v-46.543996c0-25.703998 20.935998-46.551996 46.743996-46.551997z" fill="#00AACC" p-id="10473"></path><path d="M465.712004 698.175945h46.743996c25.815998 0 46.743996 20.847998 46.743996 46.551997v46.543996c0 25.703998-20.919998 46.551996-46.743996 46.551997h-46.743996c-25.815998 0-46.751996-20.847998-46.751997-46.551997v-46.543996c0-25.703998 20.935998-46.551996 46.751997-46.551997z" fill="#48E1F4" p-id="10474"></path><path d="M278.728018 279.279978c0 25.695998-20.919998 46.543996-46.743996 46.543997-25.815998 0-46.743996-20.847998-46.743996-46.551997 0-25.711998 20.927998-46.543996 46.743996-46.543996 25.823998 0 46.743996 20.831998 46.743996 46.543996zM512.456 279.279978c0 25.695998-20.927998 46.543996-46.743996 46.543997s-46.751996-20.847998-46.751997-46.551997c0-25.711998 20.935998-46.543996 46.751997-46.543996 25.815998 0 46.743996 20.831998 46.743996 46.543996zM746.183982 279.279978c0 25.695998-20.927998 46.543996-46.751997 46.543997-25.807998 0-46.743996-20.847998-46.743996-46.551997 0-25.711998 20.935998-46.543996 46.743996-46.543996 25.823998 0 46.751996 20.831998 46.751997 46.543996zM278.728018 744.719942c0 25.719998-20.919998 46.559996-46.743996 46.559996-25.815998 0-46.743996-20.839998-46.743996-46.559996 0-25.695998 20.927998-46.543996 46.743996-46.543997 25.823998 0 46.743996 20.847998 46.743996 46.551997z" fill="#E9FFF5" p-id="10475"></path><path d="M278.728018 511.99996c0 25.703998-20.919998 46.543996-46.743996 46.543996-25.815998 0-46.743996-20.839998-46.743996-46.543996 0-25.703998 20.927998-46.543996 46.743996-46.543996 25.823998 0 46.743996 20.839998 46.743996 46.543996z" fill="#FEDEE1" p-id="10476"></path><path d="M512.456 511.99996c0 25.703998-20.927998 46.543996-46.743996 46.543996S418.960007 537.703958 418.960007 511.99996c0-25.703998 20.935998-46.543996 46.751997-46.543996 25.815998 0 46.743996 20.839998 46.743996 46.543996z" fill="#8FE9DB" p-id="10477"></path><path d="M512.456 744.719942c0 25.719998-20.927998 46.559996-46.743996 46.559996s-46.751996-20.839998-46.751997-46.559996c0-25.695998 20.935998-46.543996 46.751997-46.543997 25.815998 0 46.743996 20.847998 46.743996 46.551997z" fill="#BCF4F5" p-id="10478"></path><path d="M746.183982 744.719942c0 25.719998-20.927998 46.559996-46.751997 46.559996-25.807998 0-46.743996-20.839998-46.743996-46.559996 0-25.695998 20.935998-46.543996 46.743996-46.543997 25.823998 0 46.751996 20.847998 46.751997 46.551997z" fill="#91EDF8" p-id="10479"></path><path d="M746.183982 511.99996c0 25.703998-20.927998 46.543996-46.751997 46.543996-25.807998 0-46.743996-20.839998-46.743996-46.543996 0-25.703998 20.935998-46.543996 46.743996-46.543996 25.823998 0 46.751996 20.839998 46.751997 46.543996z" fill="#EAEAEE" p-id="10480"></path><path d="M535.831998 139.631989H348.848013a23.319998 23.319998 0 0 1-23.367998-23.263998 23.319998 23.319998 0 0 1 23.367998-23.279998H535.839998a23.319998 23.319998 0 0 1 23.367998 23.279998 23.319998 23.319998 0 0 1-23.367998 23.263998zM652.687989 116.367991a23.311998 23.311998 0 0 1-23.359998 23.263998 23.311998 23.311998 0 0 1-23.375998-23.263998 23.319998 23.319998 0 0 1 23.367998-23.279998 23.311998 23.311998 0 0 1 23.359998 23.279998z" fill="#1E2147" p-id="10481"></path><path d="M909.783969 186.175985h46.751996a23.319998 23.319998 0 0 1 23.367998 23.279999v139.639989a23.311998 23.311998 0 0 1-23.367998 23.263998h-46.751996a23.311998 23.311998 0 0 1-23.359998-23.263998V209.455984a23.319998 23.319998 0 0 1 23.359998-23.279999z" fill="#999AAC" p-id="10482"></path><path d="M956.535965 372.367971a23.327998 23.327998 0 0 1-23.375998-23.279998V209.463984a23.327998 23.327998 0 0 1 23.375998-23.279999 23.319998 23.319998 0 0 1 23.367998 23.279999v139.639989a23.319998 23.319998 0 0 1-23.367998 23.271998z" fill="#7C7F95" p-id="10483"></path><path d="M909.783969 465.455964h46.751996a23.319998 23.319998 0 0 1 23.367998 23.271998v139.631989a23.319998 23.319998 0 0 1-23.367998 23.279998h-46.751996a23.311998 23.311998 0 0 1-23.359998-23.279998V488.719962a23.319998 23.319998 0 0 1 23.359998-23.279998z" fill="#999AAC" p-id="10484"></path><path d="M956.535965 651.631949a23.319998 23.319998 0 0 1-23.375998-23.263998V488.719962a23.327998 23.327998 0 0 1 23.375998-23.279998 23.319998 23.319998 0 0 1 23.367998 23.279998v139.639989a23.311998 23.311998 0 0 1-23.367998 23.263998z" fill="#7C7F95" p-id="10485"></path><path d="M722.799984 1023.99992H255.36002a23.327998 23.327998 0 0 1-23.375998-23.279998 23.327998 23.327998 0 0 1 23.375998-23.263998h467.439964a23.327998 23.327998 0 0 1 23.383998 23.271998A23.327998 23.327998 0 0 1 722.799984 1023.99992z" fill="#4C4F6E" p-id="10486"></path></svg>
        </div>

       </div>
   )
}

export default XPhone;