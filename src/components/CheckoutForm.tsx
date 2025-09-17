import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/data/products";

interface CheckoutFormProps {
  selectedProducts: Product[];
  onClose: () => void;
}

const CheckoutForm = ({ selectedProducts, onClose }: CheckoutFormProps) => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    telefon: '',
    email: '',
    adresa: '',
    grad: '',
    postanskiBroj: '',
    napomena: '',
    nacin_placanja: 'po_uzecu'
  });
  
  const { toast } = useToast();

  const ukupno = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.ime || !formData.prezime || !formData.telefon || !formData.adresa) {
      toast({
        title: "Greška",
        description: "Molimo popunite sva obavezna polja.",
        variant: "destructive"
      });
      return;
    }

    // Simulate order submission
    toast({
      title: "Porudžbina uspešno poslata!",
      description: `Vaša porudžbina u vrednosti od ${ukupno.toLocaleString('sr-RS')} RSD je uspešno primljena.`,
    });
    
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Finalizuj porudžbinu
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Order Summary */}
          <div className="mb-6 p-4 bg-secondary rounded-lg">
            <h3 className="font-semibold mb-3">Pregled porudžbine:</h3>
            {selectedProducts.map((product) => (
              <div key={product.id} className="flex justify-between items-center mb-2">
                <span className="text-sm">{product.name}</span>
                <span className="font-medium">{product.price.toLocaleString('sr-RS')} RSD</span>
              </div>
            ))}
            <div className="border-t border-border pt-2 mt-3">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Ukupno:</span>
                <span className="text-primary">{ukupno.toLocaleString('sr-RS')} RSD</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ime">Ime *</Label>
                <Input
                  id="ime"
                  value={formData.ime}
                  onChange={(e) => handleInputChange('ime', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="prezime">Prezime *</Label>
                <Input
                  id="prezime"
                  value={formData.prezime}
                  onChange={(e) => handleInputChange('prezime', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="telefon">Telefon *</Label>
                <Input
                  id="telefon"
                  type="tel"
                  value={formData.telefon}
                  onChange={(e) => handleInputChange('telefon', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <Label htmlFor="adresa">Adresa *</Label>
              <Input
                id="adresa"
                value={formData.adresa}
                onChange={(e) => handleInputChange('adresa', e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="grad">Grad</Label>
                <Input
                  id="grad"
                  value={formData.grad}
                  onChange={(e) => handleInputChange('grad', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="postanskiBroj">Poštanski broj</Label>
                <Input
                  id="postanskiBroj"
                  value={formData.postanskiBroj}
                  onChange={(e) => handleInputChange('postanskiBroj', e.target.value)}
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <Label className="text-base font-semibold">Način plaćanja *</Label>
              <RadioGroup
                value={formData.nacin_placanja}
                onValueChange={(value) => handleInputChange('nacin_placanja', value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="po_uzecu" id="po_uzecu" />
                  <Label htmlFor="po_uzecu">Plaćanje po uzećу</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="preko_racuna" id="preko_racuna" />
                  <Label htmlFor="preko_racuna">Plaćanje preko računa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="licno_preuzimanje" id="licno_preuzimanje" />
                  <Label htmlFor="licno_preuzimanje">Lično preuzimanje (Beograd Centar)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Notes */}
            <div>
              <Label htmlFor="napomena">Napomena</Label>
              <Textarea
                id="napomena"
                value={formData.napomena}
                onChange={(e) => handleInputChange('napomena', e.target.value)}
                placeholder="Dodatne napomene za vašu porudžbinu..."
                rows={3}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Otkaži
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-accent text-primary-foreground"
              >
                Potvrdi porudžbinu
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutForm;