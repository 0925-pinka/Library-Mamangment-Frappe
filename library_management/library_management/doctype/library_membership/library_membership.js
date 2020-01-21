// Copyright (c) 2020, Priyanka and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Library Membership', {
// 	// refresh: function(frm) {

// 	// }
// });

frappe.ui.form.on('Library Membership',
{
	// refresh: function(frm) {
	"library_member" : function(frm) 
	{
		frappe.call
		({
            "method": "frappe.client.get",
			args:
			{
                doctype: "Library Member",
                name: frm.doc.library_member
            },
			callback: function (data) 
			{
				console.log("get",data);
                frappe.model.set_value(frm.doctype,
                    frm.docname, "member_first_name",
                    data.message.first_name
                    // + (data.message.last_name ?
					// 	(" " + data.message.last_name) : "")
					)
				
				frappe.model.set_value(frm.doctype,
					frm.docname, "member_last_name",
					data.message.last_name
				)	
						
            }
        })
    }
	// }
});
