
function QueryPromise(){
this._resolve=null;
this._reject=null;
this._pro=new Promise((resolve,reject)=>{
this._resolve=resolve;
this._reject=reject;
})

this.getPromise=()=>{
    return this._pro;
}

this.resolve=()=>this._resolve();

this.reject=()=>this._reject();


}
