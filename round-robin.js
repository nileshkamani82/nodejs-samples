
module.exports.addProfilesToGlobalList = addProfilesToGlobalList;
module.exports.getProfileIdForVoucher = getProfileIdForVoucher;

profile = {};


function addProfilesToGlobalList(tempList) {

    for(var i=0; i < tempList.length; i++){
        if(!profile.hasOwnProperty(tempList[i])){
            profile[tempList[i]] = 0;
        }
    }

}

function getProfileIdForVoucher() {

    var min = Number.MAX_SAFE_INTEGER;

    var profileId;

    for (var key in profile) {
        if (profile.hasOwnProperty(key)) {
            if(profile[key] < min) {
                min = profile[key];
                profileId = key;
            }
        }
    }

    return profileId;

}

