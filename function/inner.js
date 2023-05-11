// inner and split method example

function something(gret, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
    }
    let message = gret + ' ' + getFirstName()
    console.log(message)
}

something('Good Morning', 'HM Nayem')