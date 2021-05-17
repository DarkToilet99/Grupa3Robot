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
    public partial class Controlmanual : ContentPage
    {
        public Controlmanual()
        {
            InitializeComponent();
        }

        private void Button_in_fata(object sender, EventArgs e)
        {

        }

        private async void Button_OK(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Page2());
        }

        private void Button_spate(object sender, EventArgs e)
        {

        }

        private void Button_stanga(object sender, EventArgs e)
        {

        }

        private void Button_dreapta(object sender, EventArgs e)
        {

        }
    }
}