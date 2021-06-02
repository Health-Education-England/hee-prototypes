# Card

To set the color of the document tag, you can use a preset or use a color hash

Supported doctype tags:

pdf - #F40F02
doc, docx - #2b579a
xls, xlsx,csv - #1D6F42
txt - #768692


Available fields:

Name            Values                          Purpose
"type"          "card" or omit                  When making a link for a card, use this to ensure correct formatting of the description field.
"description"   Text string or HTML             A verbose description of what the link is for, inserted before the link
"title"         Text string                     Description of link. Warn of new tab or opens document if necessary
"text"          Text string or HTML             Text for link
"url"           Text string                     URL
"docType"       Text string                     Extension type (without .) eg pdf, doc, xls
"tagColor"      Text string or color hash       See above for supported doctype tags, or enter your own hex eg. "#660066"
"docSize"       Text string                     Indicate document size
"newTab"        true or omit                    Make link open new tab. Remember to include appropriate warnings if doing so.

