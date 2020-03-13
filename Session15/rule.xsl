<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8"/>
<xsl:template match="/">
<html>
<head><title>Books</title>
</head>
<body>
<table width="100%" border="1">
  <thead>
           <tr>
                <td width="35%"><b>Title</b></td>
                <td width="10%"><b>Writer</b></td>
                <td width="10%"><b>Year First Published</b></td>
                <td width="15%"><b>Pages</b></td>
          </tr>
   </thead>
  <tbody>
             <xsl:for-each select="books/book">
             <tr>
                  <td width="35%"><xsl:value-of select="title" /></td>
                  <td width="10%"><xsl:value-of select="writer" /></td>
                  <td width="10%"><xsl:value-of select="year" /></td>
                  <td width="15%"><xsl:value-of select="pages" /></td>
            </tr>
            </xsl:for-each>
  </tbody>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
