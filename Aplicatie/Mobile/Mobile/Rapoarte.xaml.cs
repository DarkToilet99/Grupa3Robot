using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Mobile
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Rapoarte : ContentPage
    {
        public Rapoarte()
        {
            InitializeComponent();
        }

        private async void Button_Detalii_transport(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Detaliitransport());
        }
    }
}