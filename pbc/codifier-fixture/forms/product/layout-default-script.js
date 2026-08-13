// product smoke newcod
export default { onFieldChange(f,v,api){ if(f==='price'&&Number(v)>10000){api.setFieldValue('active',false);} } }
