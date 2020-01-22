// Copyright (c) 2020, Priyanka and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Transaction',
{
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
                frappe.model.set_value(frm.doctype,
                    frm.docname, "member_name",
                    data.message.first_name
                    + (data.message.last_name ?
						(" " + data.message.last_name) : ""))
				
            }
		})
		
	},

	"library_article": function(frm)
	{
		frappe.call
		({
			"method": "frappe.client.get",
			args:{
				doctype: "Library Article",
				name: frm.doc.library_article
			},
			callback: function (data) 
			{
                frappe.model.set_value(frm.doctype,
                    frm.docname, "article_name",
                    data.message.article_name )
				
            }

		})
	}
	
});

