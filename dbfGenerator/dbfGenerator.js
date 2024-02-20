import {DBFFile} from 'dbffile';

// This Function creates the necessary tdexport.df file
async function writeTD()
{
    let fieldDescriptors = [
        { name: 'D_EVENT_ID', type: 'I', size: 255 },
        { name: 'D_SEC_NUM', type: 'I', size: 255 },
        { name: 'D_PAIR_NUM', type: 'I', size: 255 },
        { name: 'D_REC_SEQ', type: 'I', size: 255 },
        { name: 'D_MEM_ID', type: 'I', size: 255 }
    ];
}

// This Function creates the necessary tsexport.df file
async function writeTS()
{
    let fieldDescriptors = [
        { name: 'S_EVENT_ID', type: 'I', size: 255 },
        { name: 'S_SEC_NUM', type: 'I', size: 255 },
        { name: 'S_SEC_NAME', type: 'C', size: 255 },
        { name: 'S_K_FACTOR', type: 'C', size: 255 },
        { name: 'S_R_SYSTEM', type: 'C', size: 255 },
        { name: 'S_CTD_IDM', type: 'I', size: 255 },
        { name: 'S_ATD_IDM', type: 'I', size: 255 },
        { name: 'S_TRN_TYPE', type: 'C', size: 255 },
        { name: 'S_TOT_RNDS', type: 'I', size: 255 },
        { name: 'S_LST_PAIR', type: 'I', size: 255 },
        { name: 'S_DTLREC01', type: 'I', size: 255 },
        { name: 'S_OPERATOR', type: 'C', size: 255 },
        { name: 'S_STATUSR', type: 'C', size: 255 }
    ];
}

// This Function creates the necessary thexport.df file
async function writeTH()
{
    let fieldDescriptors = [
        { name: 'H_EVENT_ID', type: 'I', size: 255 },
        { name: 'H_NAME_ID', type: 'C', size: 255 },
        { name: 'H_TOT_SECT', type: 'I', size: 255 },
        { name: 'H_BEG_DATE', type: 'D', size: 255 },
        { name: 'H_END_DATE', type: 'D', size: 255 },
        { name: 'H_RCV_DATE', type: 'D', size: 255 },
        { name: 'H_ENT_DATE', type: 'D', size: 255 },
        { name: 'H_AFF_IDE', type: 'C', size: 255 },
        { name: 'H_CITYDE', type: 'C', size: 255 },
        { name: 'H_STATEE', type: 'C', size: 255 },
        { name: 'H_ZIPCODE', type: 'I', size: 255 },
        { name: 'H_COUNTRY', type: 'C', size: 255 },
        { name: 'H_SENDCROS', type: 'C', size: 255 },
        { name: 'H_SCHOLAST', type: 'C', size: 255 },
        { name: 'H_SECREC01', type: 'I', size: 255 }
    ];
}