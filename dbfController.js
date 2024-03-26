const { DBFFile } = require('dbffile');

// This Function creates the necessary tdexport.df file
function writeTD()
{
    let fieldDescriptors = [
        { name: 'D_EVENT_ID', type: 'I', size: 255 },
        { name: 'D_SEC_NUM', type: 'I', size: 255 },
        { name: 'D_PAIR_NUM', type: 'I', size: 255 },
        { name: 'D_REC_SEQ', type: 'I', size: 255 },
        { name: 'D_MEM_ID', type: 'I', size: 255 }
    ];
    let samplePlayers = [
        {
            D_MEM_ID: 10000001,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000002,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000003,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000004,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000005,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000006,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000007,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000008,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000009,
            D_SEC_NUM: 221217001
        },
        {
            D_MEM_ID: 10000010,
            D_SEC_NUM: 221217001
        }
    ];
}

// This Function creates the necessary tsexport.df file
async function writeTS()
{
    let fieldDescriptors = [
        { name: 'S_EVENT_ID', type: 'C', size: 9 },
        { name: 'S_SEC_NUM', type: 'C', size: 2 },
        { name: 'S_SEC_NAME', type: 'C', size: 10 },
        { name: 'S_K_FACTOR', type: 'C', size: 1 },
        { name: 'S_R_SYSTEM', type: 'C', size: 1 },
        { name: 'S_CTD_IDM', type: 'C', size: 8 },
        { name: 'S_ATD_IDM', type: 'C', size: 8 },
        { name: 'S_TRN_TYPE', type: 'C', size: 1 },
        { name: 'S_TOT_RNDS', type: 'N', size: 2.0 },
        { name: 'S_LST_PAIR', type: 'N', size: 4.0 },
        { name: 'S_DTLREC01', type: 'N', size: 7.0 },
        { name: 'S_OPERATOR', type: 'C', size: 2 },
        { name: 'S_STATUSR', type: 'C', size: 1 }
    ];

    let records = [
        {
            S_EVENT_ID: '1',
            S_SEC_NUM: '123',
            S_SEC_NAME: 'Section A',
            S_K_FACTOR: 'Some value',
            S_R_SYSTEM: 'Another value',
            S_CTD_IDM: '1001',
            S_ATD_IDM: '2001',
            S_TRN_TYPE: 'Type A',
            S_TOT_RNDS: 5,
            S_LST_PAIR: 10,
            S_DTLREC01: 15,
            S_OPERATOR: 'Operator X',
            S_STATUSR: 'Active'
        },
        {
            S_EVENT_ID: '2',
            S_SEC_NUM: '124',
            S_SEC_NAME: 'Section B',
            S_K_FACTOR: 'Another value',
            S_R_SYSTEM: 'Some value',
            S_CTD_IDM: '1002',
            S_ATD_IDM: '2002',
            S_TRN_TYPE: 'Type B',
            S_TOT_RNDS: 6,
            S_LST_PAIR: 11,
            S_DTLREC01: 16,
            S_OPERATOR: 'Operator Y',
            S_STATUSR: 'Inactive'
        }
        // Add more records as needed
    ];

    let dbf = await DBFFile.create('./dbfGenerator/output.dbf', fieldDescriptors);
    console.log('DBF file created.');
    dbf.appendRecords(records);
    console.log(`${records.length} records added.`);
}

// This Function creates the necessary thexport.df file
function writeTH()
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

// This Function calls the functions to create the dbf files
function createDBFFiles()
{
    // Call for thexport.df
    // writeTH()
    // Call for tsexport.df
    // writeTS()
    // Call for tdexport.df
    writeTS()
}

module.exports = {
    createDBFFiles,
    writeTS
};