from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.core.files.uploadedfile import SimpleUploadedFile
from PIL import Image
import io

class ClassificationAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        
    def create_test_image(self):
        """Crea una imagen de prueba"""
        image = Image.new('RGB', (224, 224), color='red')
        image_io = io.BytesIO()
        image.save(image_io, format='JPEG')
        image_io.seek(0)
        return SimpleUploadedFile(
            "test.jpg",
            image_io.read(),
            content_type="image/jpeg"
        )
    
    def test_classify_endpoint_without_image(self):
        """Test clasificación sin imagen"""
        response = self.client.post('/api/ia/classifications/classify/')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    
    def test_classify_endpoint_with_image(self):
        """Test clasificación con imagen"""
        image = self.create_test_image()
        response = self.client.post(
            '/api/ia/classifications/classify/',
            {'image': image},
            format='multipart'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('confidence', response.data['prediction_data'])
