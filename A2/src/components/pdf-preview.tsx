import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { useAppSelector } from "../hooks/redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";
import PDFDocument from "@/components/pdf-document";

const PDFPreview: React.FC = () => {
  const formData = useAppSelector((state) => state.form);
  const [showViewer, setShowViewer] = React.useState(true);

  return (
    <Card className="sticky top-10 w-full bg-white shadow-lg pb-0">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center justify-between text-lg font-bold text-gray-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            PDF Preview
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowViewer(!showViewer)}
              variant="outline"
              size="sm"
            >
              <Eye className="w-4 h-4 mr-1" />
              {showViewer ? "Hide" : "Show"} Preview
            </Button>
            <PDFDownloadLink
              document={<PDFDocument formData={formData} />}
              fileName="registration-form.pdf"
            >
              {({ loading }) => (
                <Button disabled={loading} size="sm">
                  <Download className="w-4 h-4 mr-1" />
                  {loading ? "Generating..." : "Download PDF"}
                </Button>
              )}
            </PDFDownloadLink>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[600px]">
        {showViewer ? (
          <div className="w-full h-full">
            <PDFViewer
              width="100%"
              height="100%"
              style={{
                border: "none",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <PDFDocument formData={formData} />
            </PDFViewer>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="text-center">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">PDF Preview Hidden</p>
              <p className="text-sm text-gray-500">
                Click "Show Preview" to view the PDF
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PDFPreview;
