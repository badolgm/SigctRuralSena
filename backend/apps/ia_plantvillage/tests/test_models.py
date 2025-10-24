from django.test import TestCase
from apps.ia_plantvillage.models import PlantDisease, Classification

class PlantDiseaseTestCase(TestCase):
    def setUp(self):
        PlantDisease.objects.create(
            name="Test Disease",
            symptoms="Test symptoms",
            treatment="Test treatment",
            prevention="Test prevention"
        )

    def test_disease_creation(self):
        """Test que se puede crear una enfermedad"""
        disease = PlantDisease.objects.get(name="Test Disease")
        self.assertEqual(disease.symptoms, "Test symptoms")
        
    def test_disease_str(self):
        """Test del método __str__"""
        disease = PlantDisease.objects.get(name="Test Disease")
        self.assertEqual(str(disease), "Test Disease")
