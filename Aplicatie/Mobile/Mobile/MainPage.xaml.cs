using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Mobile
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private async void Button_Inregistrare(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Page1());
        }

        private async void Button_Autentificare(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Page2());
        }
    }
}
